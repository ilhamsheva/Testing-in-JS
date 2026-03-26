export default class RocketLauncer {
    constructor(rockets = []) {
        this.rockets = rockets;
    }

    launchAllRockets() {
        this.rockets.forEach(rocket => {
            rocket.engineStatus = "active";
        });

        this.rockets = [];
    }

    launchRocketByQueue() {
        const rocket = this.rockets.shift();
        rocket.engineStatus = "active";
    }
}