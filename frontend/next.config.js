module.exports = {
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 600 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 6
  }
};
