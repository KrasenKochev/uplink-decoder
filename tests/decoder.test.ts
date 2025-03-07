
import { decodeUplink,hexToDecArr } from '../src/uplinkFunctionToTest';
test('should correctly decode uplink with firstPayload', () => {
    const inputOne = { bytes: hexToDecArr("011C034A241805D9E7195201") };
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
    var result = decodeUplink(inputOne);
    try{
      expect(result).toEqual(expectedOutput);
    }catch(error){
      console.log(`Test failed, expected and actual result does not match for input: ${inputOne.bytes}`)
      console.log(`Expected output:`, expectedOutput)
      console.log(`Actual output:`, result)
      throw error;
    }
    
  });
  
  test('should correctly decode uplink with secondPayload', () => {
    const inputTwo = { bytes: hexToDecArr("041312011C034A241805D9E7195201") };
    var expectedOutput = { 
      data: { 
        deviceVersions: { hardware: 13, software: 12 },
        internalTemperature: 28,
        energy_kWh: 55190.552,
        power_W: 1497,
        acVoltage_V: 231,
        acCurrent_mA: 6482,
        relayState: 'ON'
      } 
    };
    var result = decodeUplink(inputTwo);
    try{
      expect(result).toEqual(expectedOutput);
    }catch(error){
      console.log(`Test failed, expected and actual result does not match for input: ${inputTwo.bytes}`)
      console.log(`Expected output:`, expectedOutput)
      console.log(`Actual output:`, result)
      throw error;
    }
  });