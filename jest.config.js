module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '^@testing-library/react$': '<rootDir>/node_modules/@testing-library/react',
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        "/node_modules/",
        "^.+\\.jsx?$",
        "^.+\\.tsx?$",
        "\\.png$"
    ],
};
