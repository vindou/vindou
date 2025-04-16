class ASCIIGrid {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d', { alpha: false });
        this.grid = [];
        this.cellSize = 60;
        this.wavePosition = 0;
        this.waveSpeed = 0.009;
        this.baseWidth = 0.5;
        this.amplitude = 0.05;
        this.frequency = 500;
        this.phase = 0;
        this.ditherMatrix = [
            [0, 8, 2, 10],
            [12, 4, 14, 6],
            [3, 11, 1, 9],
            [15, 7, 13, 5]
        ];
        this.asciiChars = [' ', '▁', '▂', '▃', '▄', '▅', '▆', '▇', '█', '▉', '▊', '▋', '▌', '▍', '▎', '▏'];
        this.pixelRatio = window.devicePixelRatio || 1;
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        // Adjust parameters for mobile
        if (this.isMobile) {
            this.cellSize = 40;
            this.waveSpeed = 0.006;
            this.frequency = 300;
        }

        this.init();
    }

    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.touchAction = 'none';
        document.body.appendChild(this.canvas);

        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('orientationchange', () => {
            setTimeout(() => this.resize(), 100);
        });

        this.createGrid();
        this.animate();
    }

    resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';

        this.canvas.width = width * this.pixelRatio;
        this.canvas.height = height * this.pixelRatio;

        this.ctx.scale(this.pixelRatio, this.pixelRatio);
        this.ctx.font = `${this.cellSize}px monospace`;

        this.createGrid();
    }

    createGrid() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const cols = Math.ceil(width / this.cellSize);
        const rows = Math.ceil(height / this.cellSize);

        this.grid = [];
        for (let y = 0; y < rows; y++) {
            this.grid[y] = [];
            for (let x = 0; x < cols; x++) {
                this.grid[y][x] = {
                    char: ' ',
                    intensity: 0,
                    lastUpdate: 0
                };
            }
        }
    }

    getDitherValue(x, y) {
        const matrixSize = 4;
        return this.ditherMatrix[y % matrixSize][x % matrixSize] / 16;
    }

    getCharFromIntensity(intensity, x, y) {
        const ditherValue = this.getDitherValue(x, y);
        const adjustedIntensity = Math.min(1, Math.max(0, intensity + ditherValue));
        const index = Math.floor(adjustedIntensity * (this.asciiChars.length - 1));
        return this.asciiChars[index];
    }

    calculateLocalWidth(position) {
        return (this.baseWidth / 2) + this.amplitude * Math.sin(this.frequency * position + this.phase);
    }

    updateWave() {
        this.wavePosition += this.waveSpeed;
        this.phase += 0.02;
        if (this.wavePosition > 2) {
            this.wavePosition = 0;
        }

        const cols = this.grid[0].length;
        const rows = this.grid.length;

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const position = (x + y) / (cols + rows);
                const localHalfWidth = this.calculateLocalWidth(position);
                const waveDistance = Math.abs(position - this.wavePosition);

                let intensity = 0;
                if (waveDistance < localHalfWidth) {
                    intensity = 1 - (waveDistance / localHalfWidth);
                }

                this.grid[y][x].intensity = intensity;
                this.grid[y][x].char = this.getCharFromIntensity(intensity, x, y);
            }
        }
    }

    draw() {
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width / this.pixelRatio, this.canvas.height / this.pixelRatio);

        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';

        for (let y = 0; y < this.grid.length; y++) {
            for (let x = 0; x < this.grid[y].length; x++) {
                const cell = this.grid[y][x];
                const posX = x * this.cellSize + this.cellSize / 2;
                const posY = y * this.cellSize + this.cellSize / 2;

                this.ctx.fillText(cell.char, posX, posY);
            }
        }
    }

    animate() {
        this.updateWave();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

window.addEventListener('load', () => {
    new ASCIIGrid();
});