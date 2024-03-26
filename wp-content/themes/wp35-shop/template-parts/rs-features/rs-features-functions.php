<?php
function style_rs_features_theme() {
    wp_enqueue_style( 'rs-features-theme', get_stylesheet_directory_uri().'/template-parts/rs-features/css/rs-features.css');
}
function style_rs_main_features() {
    wp_enqueue_style( 'rs-features-main', get_stylesheet_directory_uri().'/css/rs-features.css');
}

function rs_main_features($content){
    add_action( 'wp_footer', 'style_rs_main_features', 12);
    $title = $content["zagolovok"];
    $features = $content["preimushhestva"];
    ?>
    <section class="rs-features" data-aos="fade-up" data-aos-delay="100">
        <div class="rs-features__container">
        <?php if(!empty($title)):?>
            <h2 data-aos="fade-up" data-aos-delay="100"><?=$title?></h2>
        <?php endif;?>
            <?php if(is_array($features)):?>
            <div class="rs-features__slider swiper">
                <div class="rs-features__swiper swiper-wrapper">
                    <?php foreach($features as $feature):?>
                    <div class="rs-features__slide swiper-slide" data-aos="fade-up" data-aos-delay="100">
                        <div class="rs-features__item">
                            <div class="rs-features__icon">
                                <img src="<?=$feature['ikonka']?>" alt="">
                            </div>
                            <div class="rs-features__desc">
                                <h5><?=$feature['zagolovok']?></h5>
                                <?php if(!empty($feature['opisanie'])):?>
                                <p><?=$feature['opisanie']?></p>
                                <?php endif;?>
                            </div>
                        </div>
                    </div>
                    <?php endforeach;?>
                </div>
            </div>
            <?php endif;?>
        </div>
    </section>
<?php }


// Вывод блока Преимущества 4 колонки на главной странице
function storefront_rs_show_custom_block() {
    // Подключить стили для блока Преимущества
    add_action( 'wp_print_scripts', 'style_rs_features_theme', 18);
	$query = new WP_Query( array (
		'post_type' => 'custom_block',
		'meta_query' => array ( 
			'relation' => 'OR', 
			array (
				'key'     => 'block_id',
				'value'   => 1, // id блока
				'compare' => '=' 
			)
		)
	));	
	while ( $query->have_posts() ) {
		$query->the_post();
		$post_meta = get_post_meta($query->post->ID);
	}
	if ($post_meta) {
		if (get_field('title')) $title = get_field('title');

	}
	?>
	<section class="rs-17">
		<div class="rs-features index-page">
			<div class="container">
				<?php if (true) : ?>
					<div class="row">
						<div class="col-xs-12">
							<h2 class="text-center section-title" data-nekoanim="fadeInUp" data-nekodelay="100">
								<span class="section-title--text"><?=$title; ?></span>
							</h2>
						</div>
					</div>					
				<?php endif; ?>
				<div class="row">
				<?php
					if ($post_meta) {
						for ($i = 1; $i < 9; $i++) {
							$feature_image = get_field("features_".$i."_img_1");
							$feature_name = get_field("features_".$i."_name_1");
							$feature_description = get_field("features_".$i."_desc_1");
							if ($feature_image || $feature_name || $feature_description) :
							?>  
								<div class="col-xs-12 col-sm-6 col-md-3 feature-block">
									<div class="feature-item" data-nekoanim="fadeInDown" data-nekodelay="400">
										<div class="feature-item--icon">
											<img class="" src="<?=$feature_image; ?>" alt="feature_picture">
										</div>
                                        <?php if($feature_name) {?>
										<h4><?=$feature_name; ?></h4>
                                        <?php } ?>
                                        <?php if($feature_description){ ?>
										<p><?=$feature_description; ?></p>
                                        <?php } ?>
									</div>
								</div>							
							<?php 
							endif;
						}
					}
					//Сброс данных запроса
					wp_reset_query();					
				?>
				</div>	
			</div>
		</div>
	</section>
	<?php
}