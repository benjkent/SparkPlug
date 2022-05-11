Project SparkPlug is a collection of C# Razor Class Libraries that can be used with Blazor (wasm) applications.

- SparkPlug - Accordion is an all-in-one multi-tiered accordion with animated arrow feature.
- SparkPlug - AudioPlayer offers a simplified audio component with all the feature you want. When you need a custom player  to play, pause, and track audio without the swiss-army-knife defaults of the regular html audio element. 

# Usage
Each C# Razor Class Library is optimized to work independently with only a project reference to the Library from a Blazor wasm applicaition and a @using statement in the _Imports.razor file. 
- all bootstrap icons, css, and javascript files are isolated and need no additional references or files to be added.
- Technical aspects of the Blazor app implementation at this time.

    - Sdk 
        - Microsoft.NET.Sdk.BlazorWebAssembly"
    - TargetFramework 
        - net6.0
 
    - PackageReference 
        - Microsoft.AspNetCore.Components. WebAssembly
        - Version "6.0.1" 
        - Microsoft.AspNetCore.Components.WebAssembly.DevServer - Version="6.0.1" 
   
# SparkPlug Accordion 
### How to use it

Accordion has three parameters to create the component and an area to place content or additional accordion sub-elements.

1. IsTopLevel 
    - A bool that defines the blue color of a top level accordion element. 
    - This allows nesting of addional accordion elements which can then be subsequently assigned ( false ) to enable a lighter blue heading color.
2. HeaderContents
    - A string defining the text content of the accordion element.
3. Size
    - An enum of HeadingSize.(h1,h2,h3,h4,h5).
4. Content
    - Not a property, rather a space to place content or add additional accordion elements.

#### The Blazor project CylinderHead included in this project has sample tabs to show examples of component usage in action.
***
# SparkPlug AudioPlayer
### How to use it
AudioPlayer has two elements. Elements can be used independent of each other to created a complete audio component.

The SPAudioDetails component has three properties.

1. ArtistName
    - A string defining the name of the artist or group.
2. AudioTitle
    - A string defining the audio title.
3. ImageSource
    - A string defining the file location of an image that is displayed in a 75px x 75px round image element.
    - It would be helpful to reduce any images to 75px x 75px. 

The SPCustomAudioPlayer has only one parameter.

1. AudioSource
    - A string defining the file location of the .mp3 audio file.

#### The Blazor project CylinderHead included in this project has sample tabs to show examples of component usage in action.
***