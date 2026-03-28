import Rocket from "./Rocket.js";
import RocketLauncer from "./RocketLauncher.js";

describe('A rocket launcher', () => { 
    it('should run all rocket', () => {
        // Arrange
        const nasaRocket = new Rocket('NASA');
        const spacexRocket = new Rocket('SpaceX');

        // Dummy Test
        const rocketLauncher = new RocketLauncer({}, [nasaRocket, spacexRocket]);

        // Action
        rocketLauncher.launchAllRockets();

        // Assert
        expect(nasaRocket.engineStatus).toEqual('active');
        expect(spacexRocket.engineStatus).toEqual('active');
        expect(rocketLauncher.rockets.length).toEqual(0);
    });

    it('should run rocket by queue', () => {
        // Arrange
        const nasaRocket = new Rocket('NASA');
        const spacexRocket = new Rocket('SpaceX');
        
        // Dummy Test
        const rocketLauncher = new RocketLauncer({}, [nasaRocket, spacexRocket]);

        // Action
        rocketLauncher.launchRocketByQueue();

        // Assert
        expect(nasaRocket.engineStatus).toEqual('active');
        expect(spacexRocket.engineStatus).toEqual('inactive');
        expect(rocketLauncher.rockets.length).toEqual(1);
    });
});