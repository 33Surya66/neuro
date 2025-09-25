# Overview

NeuroVision is a sophisticated Flutter-based mobile application designed for real-time neuro-tracking and cognitive health monitoring. The app provides professional medical-grade functionality for fatigue detection, drowsiness monitoring, and early neurological symptom identification using advanced computer vision and machine learning technologies. Built with a dark theme medical interface, it offers live camera tracking, detailed analytics dashboards, and comprehensive session history.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: Flutter cross-platform framework optimized for web deployment (mobile compatibility maintained)
- **Theme**: Professional dark medical-grade UI with custom color scheme (0xFF0F172A background, 0xFF7C83FD primary)
- **State Management**: Uses both Flutter Riverpod and Provider patterns for state management
- **UI Components**: Material Design 3 with custom medical interface components
- **Charts**: FL Chart library for real-time analytics and trend visualization
- **Navigation**: Bottom tab navigation with Home, Tracker, and Dashboard screens

## Mobile Platform Integration
- **Camera Access**: Native camera integration using the camera plugin for real-time image capture
- **Permissions**: Permission handler for managing device permissions (camera, storage, etc.)
- **Local Storage**: SharedPreferences for persisting user data and app settings
- **Fonts**: Google Fonts integration for enhanced typography

## Computer Vision & ML
- **Face Detection**: Google ML Kit face detection for real-time facial recognition and analysis
- **Image Processing**: Image processing capabilities for handling captured photos and video frames
- **ML Commons**: Google ML Kit commons providing foundational ML functionality

## Development Environment
- **Build System**: Standard Flutter build system with web deployment capabilities
- **Asset Management**: Standard Flutter asset pipeline for managing images, fonts, and other resources
- **Internationalization**: Intl package for localization and date/time formatting

## Web Deployment
- **Platform**: Progressive Web App (PWA) capabilities with manifest.json
- **Rendering**: CanvasKit renderer for high-performance graphics on web
- **Service Worker**: Offline functionality and caching support

# External Dependencies

## Core Flutter Dependencies
- **flutter**: Core Flutter framework
- **flutter_riverpod**: Advanced state management solution
- **provider**: Alternative state management for simpler use cases

## UI & Visualization
- **cupertino_icons**: iOS-style icons
- **google_fonts**: Web font integration
- **flutter_svg**: SVG image support
- **fl_chart**: Data visualization and charting

## Device Integration
- **camera**: Camera access and control
- **permission_handler**: Device permission management
- **shared_preferences**: Local data persistence

## Machine Learning & Vision
- **google_mlkit_face_detection**: Face detection and analysis
- **google_mlkit_commons**: ML Kit foundation libraries
- **image**: Image processing and manipulation

## Utilities
- **intl**: Internationalization and localization
- **http-server**: Development server for local testing

## Platform Services
- Camera hardware access for iOS and Android
- Device storage for caching and user preferences
- Google ML Kit cloud services for advanced computer vision features