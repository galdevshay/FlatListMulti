package com.perfomance;

import static com.perfomance.OpenCameraModule.sendBarcode;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class CameraActivity extends AppCompatActivity {
    Button cmdEvent;
    EditText editTextTextPersonName;
    MainApplication application;
    ReactNativeHost reactNativeHost;
    ReactInstanceManager reactInstanceManager;
    ReactApplicationContext reactApplicationContext;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Activity activity=this;
        setContentView(R.layout.activity_camera);
        cmdEvent=findViewById(R.id.cmdevent);
        editTextTextPersonName=findViewById(R.id.editTextTextPersonName);
        application=(MainApplication)this.getApplication();
        reactNativeHost=application.getReactNativeHost();
        reactInstanceManager=reactNativeHost.getReactInstanceManager();
        reactApplicationContext=(ReactApplicationContext)reactInstanceManager.getCurrentReactContext();
        cmdEvent.setOnClickListener(v -> {
            WritableMap writableMap=Arguments.createMap();
            writableMap.putString("BarCode",editTextTextPersonName.getText().toString());
            sendBarcode(reactApplicationContext,"BarCode",writableMap);
            finish();



        });
    }
}