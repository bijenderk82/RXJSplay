import { Observable, Observer } from "rxjs";

let numbers = [1,3,5];
//let source = Observable.from(numbers);

let source = Observable.create(observer => {

    let index = 0;
    let produceValue = () => {
        observer.next(numbers[index++]);
    

    if(index < numbers.length) {
        setTimeout(produceValue, 200)
    } else {
        observer.complete();
    }
    }
    produceValue();
}).map(n => n*3)
.filter(n => n>4 )

// class Myobserver implements Observer<number> {
//     next(value) {
//         console.log(`value: ${value}`);
//     }

//     error(e) {
//         console.log(`error: ${e}`);
//     }

//     complete() {
//         console.log('complete');
//     }
// }

//source.subscribe(new Myobserver);
source.subscribe(
    value => console.log(`value: ${value}`),
    e => console.log(e),
    () => console.log('complete')
)