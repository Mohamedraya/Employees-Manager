package com.manager;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Manager";
  }
}

 import com.reactnativenavigation.controllers.SplashActivity;
 import android.widget.LinearLayout;
 import android.graphics.Color;
 import android.widget.TextView;
 import android.view.Gravity;
 import android.util.TypedValue;

 public class MainActivity extends SplashActivity {
   @Override
   public LinearLayout createSplashLayout () {
     LinearLayout view = new LinearLayout(This);
     TextView textview = new TextView(this);

     view.setBackgroundColor(Color.parseColor("#521751"));
     view.setGravity(Gravity.CENTER);

     textview.setTextColor(Color.parseColor("#fa923f"));
     textview.setText("Awesome places");
     textview.setGravity(Gravity.CENTER);
     textview.setTextSize(TypedValue.COMPLEX_UNIT_DIP,40);

     view.addView(textview);
     return view;
   }
 }
