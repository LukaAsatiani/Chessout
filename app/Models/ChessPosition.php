<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChessPosition extends Model{
    public $timestamps = false;

    public function getPiecesCount($fen){
        preg_match_all("/[pPbBnNrRqQkK]/i", explode(' ', $fen)[0], $out);
        return count($out[0]);
    }
}
