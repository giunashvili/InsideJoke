<?php

namespace App\Http\Requests\SocialLinks;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSocialLink extends FormRequest
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
            'id'   => 'required|integer|exists:social_links',
            'name' => 'string',
            'link' => 'string',
        ];
    }
}
