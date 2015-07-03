package com.HoaFE.giacathitruong;

import android.os.Bundle;
import android.widget.LinearLayout;

import org.apache.cordova.*;
import com.google.ads.*;

public class MainActivity extends DroidGap {
	private static final String AdMob_Ad_Unit = "a15396a2dae93ec";
	private AdView adView;
	
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
        
        // google adv
        adView = new AdView(this, AdSize.BANNER, AdMob_Ad_Unit); 
        LinearLayout layout = super.root;
        layout.addView(adView); 
        AdRequest request = new AdRequest();
        //request.setTesting(true);
        adView.loadAd(request);
        // end google adv 
    }

}
