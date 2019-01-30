{
  // Drive 100 ms forward
  bitbot.motor(BBMotor.All, 1023);
  basic.pause(100);

  // Drive 100 ms reverse
  bitbot.motor(BBMotor.All, -1023);
  basic.pause(100);

  // Drive 100 ms forward on left and reverse on right
  bitbot.motor(BBMotor.Left, 1023);
  bitbot.motor(BBMotor.Right, -1023);
  basic.pause(100);

  // Buzz for 100 ms
  bitbot.buzz(1);
  basic.pause(100);
  bitbot.buzz(0);

  // Read left and right line sensor
  basic.showNumber(bitbot.readLine(BBLineSensor.Left));
  basic.showNumber(bitbot.readLine(BBLineSensor.Right));

  // Read left and right light sensor
  basic.showNumber(bitbot.readLight(BBLightSensor.Left));
  basic.showNumber(bitbot.readLight(BBLightSensor.Right));

  // Read sonar values
  basic.showNumber(bitbot.sonar(BBPingUnit.MicroSeconds));
  basic.showNumber(bitbot.sonar(BBPingUnit.Centimeters));
  basic.showNumber(bitbot.sonar(BBPingUnit.Inches));



}
