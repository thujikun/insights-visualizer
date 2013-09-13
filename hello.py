from waitress import serve
from pyramid.config import Configurator
from pyramid.view import view_config
from pyramid.response import Response
from pyramid_socketio.io import SocketIOContext, socketio_manage

@view_config(route_name="root", renderer="root/index.mak")
def index(request):
    return dict(title="insights visualizer")

class ConnectIOContext(SocketIOContext):
    def msg_connect(self, msg):
        print "Connect message received", msg
        self.msg('connected', hello='world')

@view_config(route_name='socket.io')
def socketio_service(request):
    print('Socket.IO request running')
    print request
    retval = socketio_manage(ConnectIOContext(request))
    return Response('')

if __name__ == '__main__':
    import os
    here = os.path.dirname(__file__)
    settings = {
            'mako.directories': [
                os.path.abspath(os.path.join(here, 'templates')),
            ],
        }

    config = Configurator(settings=settings)

    config.add_route('root', '/')
    config.add_route('socket.io', 'socket.io/*remaining')

    config.add_static_view(name="static", path='frontend/static')

    config.scan()
    app = config.make_wsgi_app()
    serve(app, host='0.0.0.0', port=8888)