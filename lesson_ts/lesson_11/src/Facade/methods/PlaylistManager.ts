import IPlaylistManager from "../interfaces/IPlaylistManager";

export default class PlaylistManager implements IPlaylistManager {
  addToPlaylist(filename: string): void {
    console.log(`PlaylistManager: "${filename}" додано`);
  }
}
