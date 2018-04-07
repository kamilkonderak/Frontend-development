var Rx = require('rxjs/Rx');
//var myObservable = Rx.Observable = Rx.Observable.range(0,10);
Rx.Observable.range(0,5)
                .map(item => Rx.Observable.range(0,item))
                .switchMap(item => item)
                .subscribe({
                next: item => console.log('Next item $(item)'),
                error: ex => console.log('Exception $(ex)'),
                complete: () => console.log('Completed.')
    
});