package com.perfomance;

import android.app.Activity;
import android.content.Intent;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class OpenCameraModule  extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    private Callback successCallback = null;
    private Callback errorCallback  = null;

    @NonNull
    @Override
    public String getName() {
        return "OpenCamera";
    }

    public OpenCameraModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);

        this.reactContext=reactContext;

    }
    @ReactMethod
    public void open()
    {
        Intent intent=new Intent(reactContext,CameraActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getCurrentActivity().startActivity(intent);

    }
    public static void sendBarcode(ReactContext reactContext,
                                   String eventName, @Nullable WritableMap params)
    {

        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName,params);
    }



}
