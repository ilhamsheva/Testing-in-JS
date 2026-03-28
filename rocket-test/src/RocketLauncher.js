export default class RocketLauncher {
  constructor(repairKit, rockets = []) {
    this.repairKit = repairKit;
    this.rockets = rockets;
  }

  launchAllRockets() {
    this.rockets.forEach((rocket) => {
      rocket.engineStatus = "active";
    });

    this.rockets = [];
  }

  launchRocketByQueue() {
    const rocket = this.rockets.shift();
    rocket.engineStatus = "active";
  }

  async repairAllRocket() {
    let failedRocketCount = 0;

    for (const rocket of this.rockets) {
      try {
        const isRepaired = await this.repairKit.repair(rocket);
        console.log(`Repaired? ${isRepaired}`);
      } catch {
        failedRocketCount++;
      }
    }

    if (!failedRocketCount) {
      return "All rocket is healthy";
    }

    return `there was ${failedRepairCount} of ${this.rockets.length} rocket fail to repair!`;
  }
}
