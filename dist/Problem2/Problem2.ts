
class Matrix{
    private columns: number;
    private rows: number;
    private element: number[][];

    constructor(columns: number, rows: number, element?: number[][]) {
        this.columns = columns;
        this.rows = rows;
        this.element = this.StartUp();
    }

    StartUp(){
        this.element = [];
        for (let i = 0; i < this.rows; i++) {
            this.element[i] = [];
            for (let j = 0; j < this.columns; j++) {
                this.element[i][j] = 0;
            }
        }
        return this.element;
    };

    fillMatrix(i: number, j: number, value: number) {
        if (i > this.rows - 1 || j > this.columns -1) {
            console.log(`
            Error the number of elements exceeds the capacity of the matrix
            `)
        } else {
            this.element[i][j] = value;
        }
    }


    get getColumns(){
        return this.columns;
    }

    set setColumns(columns: number){
        this.columns = columns;
    }

    get getRows(){
        return this.rows;
    }

    set setRows(rows: number){
        this.rows = rows;
    }

    get getElement(){
        return this.element;
    }

    set setElement(element: number[][]){
        this.element = element;
    }

    static sum(element: number[][], element1: number[][]): any {
        let rowM1 = element.length;
        let columnM1 = element[0].length;
        let rowM2 = element1.length;
        let columnM2 = element1[0].length;

        if(rowM1 != rowM2 || columnM1 != columnM2){
            return "NOOP";
        }
        let result: number[][] = [];
        for (let i = 0; i < rowM1; i++) {
            result[i] = [];
            for (let j = 0; j < columnM1; j++) {
                result[i][j] = element[i][j] + element1[i][j]
            }
        }
        return result
    }

    static product(element: number[][], element1: number[][]): any {
        let rowM1 = element.length;
        let columnM1 = element[0].length;
        let rowM2 = element1.length;
        let columnM2 = element1[0].length;

        if (columnM1 != rowM2){
            return "NOOP";
        }
        let result = new Array(rowM1);
        for (let x = 0; x < result.length; x++) {
            result[x] = new Array(columnM2).fill(0);
        }

        for (let x=0; x < result.length; x++) {
            for (let y=0; y < result[x].length; y++) { 
                //with this for we iterate matrix1 and matrix2                           
                for (let z=0; z < columnM1; z++) {
                    //In each position of result we set the value of the mult each element of the row of matrix1 with each element of the column of matrix2
                    result [x][y] = result [x][y] + element[x][z]*element1[z][y]; 
                }
            }
        }
        return result;

    }
}

    class Matrix1 extends Matrix{
        constructor(columns: number, rows: number, element?: number[][]) {
            super(columns, rows, element);
        }

        StartUp(): number[][] {
            return super.StartUp();
        }

        fillMatrix(i: number, j: number, value: number) {
            return super.fillMatrix(i, j, value)
        }
    }

const matrix1 = new Matrix1(2,2); //Create a new Matrix

matrix1.fillMatrix(0,0,5)
matrix1.fillMatrix(0,1,7)
matrix1.fillMatrix(1,0,6)
matrix1.fillMatrix(1,1,4)

const matrix2 = new Matrix1(2,2);
matrix2.fillMatrix(0,0,1)
matrix2.fillMatrix(0,1,5)
matrix2.fillMatrix(1,0,5)
matrix2.fillMatrix(1,1,7)

console.log(' ----Matrix 1----- ')
console.table(matrix1.getElement)

console.log(' ----Matrix 2----- ')
console.table(matrix2.getElement)

console.log('M1+M2')
console.table(Matrix.sum(matrix1.getElement,matrix2.getElement))
console.log('M1xM2')
console.table(Matrix.product(matrix1.getElement,matrix2.getElement))