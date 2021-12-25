/// <reference types="node" />
import RTSPClient from "../RTSPClient";
import { RTPPacket } from "../util";
import * as transform from "sdp-transform";
import { Writable } from "stream";
interface Details {
    codec: string;
    mediaSource: transform.MediaDescription;
    rtpChannel: number;
    rtcpChannel: number;
}
export default class ONVIFMetadataTransport {
    client: RTSPClient;
    stream: Writable;
    xml: string;
    constructor(client: RTSPClient, stream: Writable, details: Details);
    processRTPPacket(packet: RTPPacket): void;
}
export {};
