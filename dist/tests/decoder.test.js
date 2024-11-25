"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uplinkFunctionToTest_1 = require("../src/uplinkFunctionToTest");
test('should correctly decode uplink with firstPayload', () => {
    const inputOne = { bytes: (0, uplinkFunctionToTest_1.hexToDecArr)("011C034A241805D9E7195201") };
    var expectedOutput = {
        data: {
            internalTemperature: 28,
            energy_kWh: 55190.552,
            power_W: 1497,
            acVoltage_V: 231,
            acCurrent_mA: 6482,
            relayState: 'ON'
        }
    };
    var result = (0, uplinkFunctionToTest_1.decodeUplink)(inputOne);
    expect(result).toEqual(expectedOutput);
});
test('should correctly decode uplink with secondPayload', () => {
    const inputTwo = { bytes: (0, uplinkFunctionToTest_1.hexToDecArr)("041312011C034A241805D9E7195201") };
    var expectedOutput = {
        data: {
            internalTemperature: 28,
            energy_kWh: 55190.552,
            power_W: 1497,
            acVoltage_V: 231,
            acCurrent_mA: 6482,
            relayState: 'ON'
        }
    };
    var result = (0, uplinkFunctionToTest_1.decodeUplink)(inputTwo);
    expect(result).toEqual(expectedOutput);
});
