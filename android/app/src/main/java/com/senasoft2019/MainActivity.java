package com.senasoft2019;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // import this
import android.os.Bundle; // import this
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this, R.style.SplashScreenTheme);  // here
        super.onCreate(savedInstanceState);
    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Senasoft2019";
    }


}
