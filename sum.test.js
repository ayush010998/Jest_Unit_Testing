const sum=require('./sum');



//simple test case of function using jest framework

/*test("first test case",()=>{
    expect(sum(1,96)).toBe(97);
})

test("second test case",()=>{
    expect(sum(1,255)).not.toBe(256);
})

test("third test case",()=>{
    expect(sum(2,66)).not.toBe(789);
})
*/


// object unit testing

/*

test("object testing",()=>{
    expect(sum()).toEqual({name:'ayush'})
})

*/


//string test cases 

/*test("string testing",()=>{
    expect(sum()).toMatch(/Anand/);
})

test("string unit test",()=>{
    expect(sum()).not.toMatch('ana');
})
*/

/*test('testing callbacks using jest',(done)=>{
    function callback(data){
        try{
            expect(data).toBe('Ayush')

        }catch(err){
            done(err)

        }
    }
    sum(callback);
})
*/

/*test("Promise test case",()=>{
    return sum().then((data)=>{
        expect(data).toBe('Ayush');

    })
})
*/


test("async/await test case",async()=>{
    const data=await sum()
    expect(data).toBe('anand')
})
