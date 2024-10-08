<?php

namespace App\Http\Requests\Members;

use Illuminate\Foundation\Http\FormRequest;

class CreateMember extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'type' => 'required|string',
            'description' => 'required|string',
            'orbital_distance' => 'required|integer',
            'color' => 'required|string',
        ];
    }
}
