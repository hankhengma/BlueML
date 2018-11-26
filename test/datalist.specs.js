import { TaskService } from './task.service';
import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [
        AppComponent
    ],
    imports: [FormsModule],
    providers: [TaskService]
}).compileComponents();
}));

    it('two way binding test for training data page', function(){
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const de = fixture.debugElement.query(By.css('h2'));
        expect(de.nativeElement.textContent).toEqual('Task 1');
        assert.equal(true, $("#available-data").html().includes("Stanford dataset"));
        assert.equal(true, $("#available-data").html().includes("MIT dataset"));
        assert.equal(true, $("#available-data").html().includes("Physiobank dataset"));
        assert.equal(true, $("#available-data").html().includes("Berkley dataset"));
    });

});

/*

beforeEach(function() {
    var fixture = '<div id="fixture"><div id="available-data" ng-controller="adCntrl" class="btn-group-vertical ng-scope"></div></div>';

    document.body.insertAdjacentHTML(
        'afterbegin',
        fixture);
});


it('two way binding test for training data page', function(){
    assert.equal(true, $("#available-data").html().includes("Stanford dataset"));
    assert.equal(true, $("#available-data").html().includes("MIT dataset"));
    assert.equal(true, $("#available-data").html().includes("Physiobank dataset"));
    assert.equal(true, $("#available-data").html().includes("Berkley dataset"));
});

// remove the html fixture from the DOM
afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
});


*/
/*
describe('Calculator', function() {

    // inject the HTML fixture for the tests
    beforeEach(function() {
        var fixture = '<div id="fixture"><input id="x" type="text">' +
            '<input id="y" type="text">' +
            '<input id="add" type="button" value="Add Numbers">' +
            'Result: <span id="result" /></div>';

        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });

    // remove the html fixture from the DOM
    afterEach(function() {
        document.body.removeChild(document.getElementById('fixture'));
    });

    // call the init function of calculator to register DOM elements
    beforeEach(function() {
        window.calculator.init();
    });

    it('should return 3 for 1 + 2', function() {
        document.getElementById('x').value = 1;
        document.getElementById('y').value = 2;
        document.getElementById('add').click();
        expect(document.getElementById('result').innerHTML).toBe('3');
    });

    it('should calculate zero for invalid x value', function() {
        document.getElementById('x').value = 'hello';
        document.getElementById('y').value = 2;
        document.getElementById('add').click();
        expect(document.getElementById('result').innerHTML).toBe('0');
    });

    it('should calculate zero for invalid y value', function() {
        document.getElementById('x').value = 1;
        document.getElementById('y').value = 'goodbye';
        document.getElementById('add').click();
        expect(document.getElementById('result').innerHTML).toBe('0');
    });

});

*/

/*
describe('Controllers', function(){ //describe your object type
    beforeEach(module('BlueML'));
    describe('adCntrl',function(){
        var adCntrl;
        beforeEach(inject(function($controller){ //instantiate controller using $controller service
            adCntrl = $controller('adCntrl');
        }));
        it('dsize should be 4', function(){
            expect(adCntrl.dsize).toBe(4);
        });
        it('dataset should contains the basic four regardless the order', function(){
            expect(adCntrl.dataset.includes('Stanford')).toBe(true);
            expect(adCntrl.dataset.includes('MIT')).toBe(true);
            expect(adCntrl.dataset.includes('Physiobank')).toBe(true);
            expect(adCntrl.dataset.includes('Berkley')).toBe(true);
        });
    });
});

*/