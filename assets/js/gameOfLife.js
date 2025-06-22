class GameOfLife {
    constructor() {
        this.canvas = document.getElementById('gameOfLife');
        this.ctx = this.canvas.getContext('2d');
        this.cellSize = 10;
        this.cols = 0;
        this.rows = 0;
        this.grid = [];
        this.nextGrid = [];

        this.init();
        this.setupEventListeners();
        this.randomize();
        this.animate();
    }

    init() {
        this.resize();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.cols = Math.floor(this.canvas.width / this.cellSize);
        this.rows = Math.floor(this.canvas.height / this.cellSize);

        this.grid = this.createGrid();
        this.nextGrid = this.createGrid();
    }

    createGrid() {
        const grid = [];
        for (let i = 0; i < this.rows; i++) {
            grid[i] = [];
            for (let j = 0; j < this.cols; j++) {
                grid[i][j] = 0;
            }
        }
        return grid;
    }

    randomize() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.grid[i][j] = Math.random() < 0.3 ? 1 : 0;
            }
        }
    }

    countNeighbors(row, col) {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;

                const newRow = row + i;
                const newCol = col + j;

                if (newRow >= 0 && newRow < this.rows &&
                    newCol >= 0 && newCol < this.cols) {
                    count += this.grid[newRow][newCol];
                }
            }
        }
        return count;
    }

    update() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const neighbors = this.countNeighbors(i, j);
                const current = this.grid[i][j];

                if (current === 1) {
                    if (neighbors < 2 || neighbors > 3) {
                        this.nextGrid[i][j] = 0;
                    } else {
                        this.nextGrid[i][j] = 1;
                    }
                } else {
                    if (neighbors === 3) {
                        this.nextGrid[i][j] = 1;
                    } else {
                        this.nextGrid[i][j] = 0;
                    }
                }
            }
        }
        [this.grid, this.nextGrid] = [this.nextGrid, this.grid];
    }

    draw() {
        this.ctx.fillStyle = '#fafafa';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#f3f3f3';

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.grid[i][j] === 1) {
                    this.ctx.fillRect(
                        j * this.cellSize,
                        i * this.cellSize,
                        this.cellSize,
                        this.cellSize
                    );
                }
            }
        }
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resize();
            this.randomize();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GameOfLife();
});