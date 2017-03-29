import { Observable, Observer } from "rxjs";

let output = document.getElementById("output");
let button = document.getElementById("button");
let click = Observable.fromEvent(button, "click")


function load(url: string) {
    console.log('welcome');
    return Observable.create(observer => {
        console.log('inside observer');
        let xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            if (xhr.statusText == "200") {
                let data = JSON.parse(xhr.responseText);
                //renderMovies(data);
                observer.next(data);
                observer.complete();
            } else {
                observer.error(xhr.statusText);
            }
        })

        xhr.open('GET', url);
        xhr.send();
    }).retryWhen(retryStratgy());
}

function retryStratgy() {
    return function(errors) {
        return errors
                .scan((acc, value) => {
                    console.log(acc, value);
                    return acc +1;
                }, 0)
                .takeWhile(acc => acc < 4)
                .delay(1000);
    }
}
load('movies.json');

function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement('div');
        div.innerHTML = m.title;
        output.appendChild(div);
    })
}

// click.flatMap(e => load('movies.json'))
//     .subscribe(o => console.log(o))

click.flatMap(e => load('movies.json'))
    .subscribe(
    renderMovies,
    e => console.log(e),
    () => console.log('complete')
    )