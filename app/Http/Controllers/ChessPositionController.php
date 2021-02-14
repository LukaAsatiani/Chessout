<?php

namespace App\Http\Controllers;

use App\Models\ChessPosition;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ChessPositionController extends Controller{
    public function store(Request $req){
        $input = [
            'fen' => $req->input('fen')
        ];
        
        $rules = [
            'fen' => 'required',
        ];
        
        $validator = Validator::make($input, $rules);

        if($validator->fails()){
            return [
                "success" => false,
                "errors" => $validator->errors()
            ];
        }

        $position = new ChessPosition();
        $position->fen = $req->input('fen');
        $position->pieces_count = $position->getPiecesCount($position->fen);
        
        try{
            $position->save();
            return response()->json([
                'success' => true, 
                'msg' => 'Position was saved'
            ]);
        } catch(\Exception $e){
            return response()->json([
                'success' => false, 
                'msg' => 'Position already exist'
            ]);
        }
    }

    public function index(){
        return ChessPosition::all()->random(1)[0];
    }

    // public function index(Request $req){
    //     $input = [
    //         'fen' => $req->input('fen')
    //     ];
        
    //     $rules = [
    //         'fen' => 'required',
    //     ];
        
    //     $validator = Validator::make($input, $rules);

    //     if($validator->fails()){
    //         return [
    //             "success" => false,
    //             "errors" => $validator->errors()
    //         ];
    //     }

    //     $position = new ChessPosition();
    //     $position->fen = $req->input('fen');
    //     $position->pieces_count = $position->getPiecesCount($position->fen);
        
    //     try{
    //         $position->save();
    //         return response()->json([
    //             'success' => true, 
    //             'msg' => 'Position was saved'
    //         ]);
    //     } catch(\Exception $e){
    //         return response()->json([
    //             'success' => false, 
    //             'msg' => 'Position already exist'
    //         ]);
    //     }
    // }

    public function destroy(ChessPosition $position){
        $position->delete();
        return ['success' => true, 'msg' => 'Position removed'];
    }
}
