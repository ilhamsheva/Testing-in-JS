export default class RocketRepairKit {
    constructor(objA, objB, objC) {
        this.objA = objA;
        this.objB = objB;
        this.objC = objC;
    }

    repair(rocket) {
        /*
            Anggap ini proses yang diambil dari suatu service eksternal
            sehingga prosesnya membutuhkan waktu yang rentan gagal
        */

        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve(`${rocket.name} repaired`);
            }, 5000);
        });
    }

}