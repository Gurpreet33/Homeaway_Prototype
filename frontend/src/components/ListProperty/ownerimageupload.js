import React, { Component } from "react";

class OwnerUpload extends Component {
  state = {};
  render() {
    return (
      <div class="imageupload panel panel-default">
        <div class="panel-heading clearfix">
          <h3 class="panel-title pull-left">Upload Image</h3>
          <div class="btn-group pull-right">
            <button type="button" class="btn btn-default active">
              File
            </button>
            <button type="button" class="btn btn-default">
              URL
            </button>
          </div>
        </div>
        <div class="file-tab panel-body">
          <label class="btn btn-default btn-file">
            <span>Browse</span>

            <input type="file" name="image-file" />
          </label>
          <button type="button" class="btn btn-default">
            Remove
          </button>
        </div>
        <div class="url-tab panel-body">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Image URL" />
            <div class="input-group-btn">
              <button type="button" class="btn btn-default">
                Submit
              </button>
            </div>
          </div>
          <button type="button" class="btn btn-default">
            Remove
          </button>

          <input type="hidden" name="image-url" />
        </div>
      </div>
    );
  }
}

export default OwnerUpload;
