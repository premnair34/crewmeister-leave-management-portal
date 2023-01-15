module.exports = {
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js","ts", "tsx"],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
  ],
  // setupFilesAfterEnv: ['<rootDir>/src/jest.setup.js'],
  transform: {
    '^.+\\.(tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest'
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      '<rootDir>/src/__mocks__/fileMock.js'
  },  
  "globals": {
    "ts-jest": {
      tsConfig: '<rootDir>/jest.tsconfig.json',
    }
  },
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/out/", "/public/"],
};