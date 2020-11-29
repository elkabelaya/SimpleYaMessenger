module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  roots:["<rootDir>/src/", "<rootDir>/tests/"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  }
};
