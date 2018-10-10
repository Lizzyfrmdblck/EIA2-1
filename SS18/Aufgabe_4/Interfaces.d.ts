declare namespace Aufgabe_4 {
    interface Studi {
        name: string;
        firstname: string;
        matrikel: number;
        age: number;
        gender: boolean;
        course: string;
    }
    interface Studis {
        [matrikel: string]: Studi;
    }
    let studiSimpleArray: Studi[];
    let studiHomoAssoc: Studis;
}
