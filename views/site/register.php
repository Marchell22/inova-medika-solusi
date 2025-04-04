<?php
/* @var $this yii\web\View */

use yii\helpers\Html;
use yii\bootstrap5\ActiveForm;

$this->registerJsFile('@web/js/register-validation.js', ['depends' => [\yii\web\JqueryAsset::class]]);

$this->title = 'Register';
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="site-register">
    <div class="row">
        <div class="col-lg-6 offset-lg-3">
            <div class="card">
                <div class="card-header bg-success text-white">
                    <h3 class="card-title text-center"><?= Html::encode($this->title) ?></h3>
                </div>
                <div class="card-body">
                    <p class="text-center">Silahkan isi data berikut untuk mendaftar:</p>

                    <div class="row">
                        <div class="col-md-12">
                            <?php $form = ActiveForm::begin([
                                'id' => 'register-form',
                                'action' => ['site/do-register'],
                                'method' => 'post',
                            ]); ?>

                            <div class="form-group">
                                <label for="fullname">Nama Lengkap</label>
                                <input type="text" class="form-control" id="fullname" name="fullname" placeholder="Masukkan nama lengkap">
                            </div>

                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" name="email" placeholder="Masukkan email">
                                <small class="form-text text-muted">Kami tidak akan membagikan email Anda kepada siapapun.</small>
                            </div>

                            <div class="form-group">
                                <label for="username">Username</label>
                                <input type="text" class="form-control" id="username" name="username" placeholder="Masukkan username">
                            </div>

                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" name="password" placeholder="Masukkan password">
                            </div>

                            <div class="form-group">
                                <label for="confirmPassword">Konfirmasi Password</label>
                                <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" placeholder="Masukkan konfirmasi password">
                            </div>

                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="terms" name="terms">
                                <label class="form-check-label" for="terms">Saya setuju dengan <a href="#">syarat dan ketentuan</a></label>
                            </div>

                            <div class="form-group text-center">
                                <button type="submit" class="btn btn-success btn-block">Daftar</button>
                            </div>

                            <?php ActiveForm::end(); ?>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-12 text-center">
                            <p>Sudah punya akun? <?= Html::a('Login disini', ['site/index']) ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>