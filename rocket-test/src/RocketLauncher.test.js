import Rocket from "./Rocket.js";
import RocketLauncer from "./RocketLauncher.js";

describe("A rocket launcher", () => {
  it("should run all rocket", () => {
    // Arrange
    const nasaRocket = new Rocket("NASA");
    const spacexRocket = new Rocket("SpaceX");

    // Dummy Test
    const rocketLauncher = new RocketLauncer({}, [nasaRocket, spacexRocket]);

    // Action
    rocketLauncher.launchAllRockets();

    // Assert
    expect(nasaRocket.engineStatus).toEqual("active");
    expect(spacexRocket.engineStatus).toEqual("active");
    expect(rocketLauncher.rockets.length).toEqual(0);
  });

  it("should run rocket by queue", () => {
    // Arrange
    const nasaRocket = new Rocket("NASA");
    const spacexRocket = new Rocket("SpaceX");

    // Dummy Test
    const rocketLauncher = new RocketLauncer({}, [nasaRocket, spacexRocket]);

    // Action
    rocketLauncher.launchRocketByQueue();

    // Assert
    expect(nasaRocket.engineStatus).toEqual("active");
    expect(spacexRocket.engineStatus).toEqual("inactive");
    expect(rocketLauncher.rockets.length).toEqual(1);
  }); // stub example

  it("should return correct result when repair kit cannot repair the rocket", async () => {
    // Arrange
    /** stub! Kita butuh mengubah implementasi fungsi untuk menghasilkan keadaan sesuai skenario uji.
     * Namun kita tidak menguji apa pun terkait fungsi yang diubah. */
    const fakeRocketRepairKit = {
      repair: () => Promise.reject("failed to repair the rocket"),
    };
    const rocketLauncher = new RocketLauncher(fakeRocketRepairKit, [{}]);
     
    // Action
    const result = await rocketLauncher.repairAllRockets(); 

    // Assert
    expect(result).toEqual("there was 1 of 1 rocket fail to repair!");
  });
});
