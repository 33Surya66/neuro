# Overview

Neurovision is a Flutter-based mobile application focused on computer vision and machine learning capabilities. The project appears to be in early development, with a basic Flutter structure and key ML/vision dependencies integrated. The app likely provides real-time camera functionality with face detection and data visualization features.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: Flutter cross-platform framework for mobile app development
- **State Management**: Uses both Flutter Riverpod and Provider patterns for state management, providing flexibility for different use cases
- **UI Components**: Material Design with Cupertino icons for iOS-style elements
- **Charts**: FL Chart library for data visualization and graphical representations

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