import {transform} from "../src/romanizer";

describe('transform',function (){
    it('should return x when given 10', function () {
        const transformed = transform(10);
        expect(transformed).toEqual('X');
    });
});