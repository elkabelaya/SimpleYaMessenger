module.exports = {
    globals: {
        "ts-jest": {
          "tsConfigFile": "tsconfig.json",
          "enableTsDiagnostics": true
        }
    },
  testEnvironment: 'jsdom',
  transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
  moduleFileExtensions: [
      "ts",
      "tsx",
      "js"
    ],

    moduleNameMapper: {
      "^utils/(.*)": "<rootDir>/src/utils/$1",
        "\\.(css|less)$": "identity-obj-proxy",
        //TODO не срабатывают aliases - разобраться
        "^api/(.*)$": "<rootDir>/src/api/$1",
        "^components/(.*)$": "<rootDir>/src/components/$1",
        "^default/(.*)$": "<rootDir>/src/default/$1",
        "^services/(.*)$": "<rootDir>/src/services/$1",
        "^stores/(.*)$": "<rootDir>/src/stores/$1",

        "^widgets/(.*)$": "<rootDir>/src/widgets/$1"
}
};
