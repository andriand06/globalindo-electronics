<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCollectionitemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('collectionitems', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('collections_id');
            $table->string('name');
            $table->integer('price');
            $table->string('image');
            $table->integer('quantity');
            $table->integer('base_price');
            $table->boolean('is_default');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('collectionitems');
    }
}
