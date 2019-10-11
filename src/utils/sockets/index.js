import io from 'socket.io-client';

export const SocketLitsentFor = {
  stocks: 'stock update',
};

export const SocketService = {
  socket: io(process.env.VUE_APP_BACKEND_URL),
  closeConnection: () =>
    SocketService.socket.off(),
  emitStocks: change =>
    SocketService.socket.emit(SocketLitsentFor.stocks, change),
  onSocket: callback => SocketService.socket.on(SocketLitsentFor.stocks, callback),
};
