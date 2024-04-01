class AgeError extends Error {
    private static invalidTypeMessage = 'Invalid type . \n The given value is not a number (Only numbers).';
    private static invalidValueMessage = 'Invalid value. \n Value is smaller than 0 (Only 0-9).';
    private static underLimitedAgeMessage = 'Invalid age. \n You are under the limited age.';
    constructor(type: 'invalidAgeType'|'invalidAgeValue'|'underLimitedAge') {
        super( (type == 'invalidAgeType' ? AgeError.invalidTypeMessage :
            (type == 'invalidAgeValue' ? AgeError.invalidValueMessage : AgeError.underLimitedAgeMessage) )
        );
        this.name = type;
    }
}

class AgeTester {
    private static limitedAge : number = 18;
    public static test (value: number) : boolean|void {
        if (typeof value !== 'number')  {
            throw new AgeError('invalidAgeType');
        }
        if (value < 0) {
            throw new AgeError('invalidAgeValue');
        }
        if (value < AgeTester.limitedAge) {
            throw new AgeError('underLimitedAge');
        }
        return true;
    }
}

export {AgeError, AgeTester};
