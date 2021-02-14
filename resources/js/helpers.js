export function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

export function fenFromMatrix(matrix){
    matrixstr = matrix.join('/')
    matrixstr = matrixstr.replaceAll(/(#+)/ig, (match) => match.length)
    return matrixstr            
}

export function matrixFromFen(fen){
    let fenstr = fen
    fenstr = fenstr.split(' ')[0]
    fenstr = fenstr.replaceAll(/([0-9])/ig, (offset) => '#'.repeat(offset))
    return fenstr.split('/') 
}

export function getEmptyMatrix(){
    let s = ('/' + '#'.repeat(8)).repeat(8).split('/')
    s.shift()

    return s
}

export function isPiece(piece){
    let b = Boolean(piece.match(/^[pbnrqkPBNRQK]$/g))
    console.log(piece, b)
    return Boolean(piece.match(/^[pbnrqkPBNRQK]$/g))
}

export function getPieceFromSquare(matrix, square) {
    let [x, y] = square.split('-')
    x-=1; y = 8 - y
    
    return matrix[y][x]
}

export function addPieceToSquare(matrix, square, piece) {
    let [x, y] = square.split('-')
    x-=1; y = 8 - y

    matrix[y] = replaceAt(matrix[y], x, piece)
    return matrix
}