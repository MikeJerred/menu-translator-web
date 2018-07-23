import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    templateUrl: './menu-translator.component.html',
    styleUrls: ['./menu-translator.component.scss']
})
export class MenuTranslatorComponent {
    @ViewChild('video')
    public video: ElementRef<HTMLVideoElement>;

    @ViewChild('canvas')
    public canvas: ElementRef<HTMLCanvasElement>;

    private stream: MediaStream;

    constructor() {
        let getUserMedia = (navigator.getUserMedia
            || (<any>navigator).webkitGetUserMedia
            || (<any>navigator).mozGetUserMedia
            || (<any>navigator).msGetUserMedia);
        navigator.getUserMedia = getUserMedia;

        this.startRecording();
    }

    public translate(): void {
        this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0);
        let image = this.canvas.nativeElement.toDataURL('image/jpeg');

        this.stopRecording();
    }

    private startRecording(): void {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ video: true, audio: true })
                .then(stream => {
                    this.stream = stream;
                    this.video.nativeElement.src = window.URL.createObjectURL(stream);
                    this.video.nativeElement.play();
                });
        } else {
            // video not supported
        }
    }

    private stopRecording(): void {
        this.stream.getAudioTracks().forEach(track => track.stop());
        this.stream.getVideoTracks().forEach(track => track.stop());
    }
}
