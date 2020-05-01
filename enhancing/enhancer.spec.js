const { succeed, fail, repair, get } = require('./enhancer.js');

describe('enhancer functions', () => {
  describe('succeed()', () => {
    it('should increase enhancement by one', () => {
      expect(succeed({ enhancement: 5 })).toEqual({ enhancement: 6 });
    });

    it('should not change enhancement level', () => {
      expect(succeed({ enhancement: 20 })).toEqual({ enhancement: 20 });
    });
  });

  describe('fail()', () => {
    it('should decrease durability by five', () => {
      expect(fail({ enhancement: 14, durability: 100 })).toEqual({
        enhancement: 14,
        durability: 95,
      });
    });

    it('should decrease durability by 10', () => {
      expect(fail({ enhancement: 15, durability: 100 })).toEqual({
        enhancement: 15,
        durability: 90,
      });
    });

    it('should decrease enhancement level by 1', () => {
      expect(fail({ enhancement: 17 })).toEqual({ enhancement: 16 });
    });
  });

  describe('repair()', () => {
    it('should restore durability to 100', () => {
      expect(repair({ durability: 50 })).toEqual({ durability: 100 });
    });
  });

  describe('get()', () => {
    it('should change name to include enhancement level', () => {
      expect(get({ enhancement: 7, name: 'Iron Sword' })).toEqual({
        enhancement: 7,
        name: '[+7] Iron Sword',
      });
    });
  });
});
