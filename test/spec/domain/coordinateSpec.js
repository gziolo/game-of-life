import Coordinate from 'domain/coordinate';
import Cell from 'domain/cell/cell';

describe('Coordinate', function() {
  beforeEach(() => {
    this.coordinate = new Coordinate(3, 3);
  });

  it('should throw exception when invalid coordinates provided', () => {
    should.throw(() => {
      let coordinate = new Coordinate(0, 0);
    }, Error, 'Invalid coordinates provided: x=0 y=0.');
  });

  it('should have not [x,y] coordinates equal to [2,1]', () => {
    (this.coordinate.equals(new Coordinate(2, 1))).should.be.false;
  });

  it('should have [x,y] coordinates equal to [3,3]', () => {
    (this.coordinate.equals(new Coordinate(3, 3))).should.be.true;
  });

  it('should not have neighbor with identical [x,y]', () => {
    (this.coordinate.isNeighbor(new Coordinate(3, 3))).should.be.false;
  });

  it('should recognize coordinate with adjacent [x,y] as neighbor', () => {
    (this.coordinate.isNeighbor(new Coordinate(2, 2))).should.be.true;
    (this.coordinate.isNeighbor(new Coordinate(2, 3))).should.be.true;
    (this.coordinate.isNeighbor(new Coordinate(2, 4))).should.be.true;
    (this.coordinate.isNeighbor(new Coordinate(3, 2))).should.be.true;
    (this.coordinate.isNeighbor(new Coordinate(3, 4))).should.be.true;
    (this.coordinate.isNeighbor(new Coordinate(4, 2))).should.be.true;
    (this.coordinate.isNeighbor(new Coordinate(4, 3))).should.be.true;
    (this.coordinate.isNeighbor(new Coordinate(4, 4))).should.be.true;
  });

  it('should not recognize coordinate with not adjacent [x,y] as neighbor', () => {
    (this.coordinate.isNeighbor(new Coordinate(1, 1))).should.be.false;
    (this.coordinate.isNeighbor(new Coordinate(3, 5))).should.be.false;
    (this.coordinate.isNeighbor(new Coordinate(5, 3))).should.be.false;
    (this.coordinate.isNeighbor(new Coordinate(9, 11))).should.be.false;
  });

  it('should have 0 neighbors', () => {
    (this.coordinate.getNeighborsCount()).should.be.equal(0);
  });

  it('should have 2 neighbors when 2 neighbors added', () => {
    this.coordinate.addNeighbor(new Coordinate(2, 2));
    this.coordinate.addNeighbor(new Coordinate(4, 4));

    (this.coordinate.getNeighborsCount()).should.be.equal(2);
  });

  it('should have live cell when live cell injected', () => {
    var coordinate = new Coordinate(1, 1, Cell.createLive());

    coordinate.hasLiveCell().should.be.true;
  });

  it('should have no live cell when dead cell injected', () => {
    var coordinate = new Coordinate(1, 1, Cell.createDead());

    coordinate.hasLiveCell().should.be.false;
  });

  it('should change state from dead to live when has exactly 3 live neighbors', () => {
    var deadCoordinate = new Coordinate(1, 1, Cell.createDead()),
      liveCoordinate12 = new Coordinate(1, 2, Cell.createLive()),
      liveCoordinate21 = new Coordinate(2, 1, Cell.createLive()),
      liveCoordinate22 = new Coordinate(2, 2, Cell.createLive());

    deadCoordinate.addNeighbor(liveCoordinate12);
    deadCoordinate.addNeighbor(liveCoordinate21);
    deadCoordinate.addNeighbor(liveCoordinate22);

    deadCoordinate.changesState().should.be.true;
  });

  it('should not change state from dead to live when has only 2 live neighbors', () => {
    var deadCoordinate = new Coordinate(1, 1, Cell.createDead()),
      liveCoordinate12 = new Coordinate(1, 2, Cell.createLive()),
      liveCoordinate21 = new Coordinate(2, 1, Cell.createLive()),
      deadCoordinate22 = new Coordinate(2, 2, Cell.createDead());

    deadCoordinate.addNeighbor(liveCoordinate12);
    deadCoordinate.addNeighbor(liveCoordinate21);
    deadCoordinate.addNeighbor(deadCoordinate22);

    deadCoordinate.changesState().should.be.false;
  });
});
