const FileReaderMock = (fileContents, type) => ({
  addEventListener: jest.fn((_, eventHandler) => {
    eventHandler();
  }),
  readAsText: jest.fn(),
  readAsDataURL: jest.fn(),
  file: new Blob([ fileContents ], { type: type || 'text/plain' }),
  onload: e => e(),
  result: 'FILE_READED'
});

export default FileReaderMock;
