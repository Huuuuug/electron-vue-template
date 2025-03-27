interface Window {
  electronAPI: {
    openFile: () => Promise<void>
    readFile: () => Promise<string>
  }
}
