describe("Tests for the black jack game", ()=>{
    describe("Test the getTotalPoints method", ()=>{
       it("Should return correct true/false score", ()=>{
        const handOne =     [{suit:"n/a",val:10,displayVal:'10'},
                            {suit:"n/a",val:9,displayVal:'9'}]
        const handTwo =     [{suit:"n/a",val:11,displayVal:'Ace'},
                            {suit:"n/a",val:6,displayVal:'6'}]
        const handThree =   [{suit:"n/a",val:10,displayVal:'10'},
                            {suit:"n/a",val:6,displayVal:'6'},
                            {suit:"n/a",val:11,displayVal:'Ace'}]
        const handFour =    [{suit:"n/a",val:2,displayVal:'2'},
                            {suit:"n/a",val:4,displayVal:'4'},
                            {suit:"n/a",val:2,displayVal:'2'},
                            {suit:"n/a",val:5,displayVal:'5'}]

        expect(dealerShouldDraw(handOne)).toBe(false) 
        /*console.log(calcPoints(handOne).isSoft)*/
        expect(dealerShouldDraw(handTwo)).toBe(true)
        /*console.log(calcPoints(handTwo).isSoft)*/
        expect(dealerShouldDraw(handThree)).toBe(false) 
        /*console.log(calcPoints(handThree).isSoft)*/
        expect(dealerShouldDraw(handFour)).toBe(true)
        console.log(dealerShouldDraw(handFour))
       })
    })
})
