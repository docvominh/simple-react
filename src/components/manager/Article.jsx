import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div id="pageContent">
        <div id="control">
          <button type="button" id="newArticle" className="button button-new float-right">New</button>
        </div>

        <div className="article-list">
        </div>

        <div className="modal prevent-close" id="newArticleModel" tabIndex="-1">
          <div className="dialog">
            <div className="dialog-content">
              <form action="@{/article/new}" method="post">
                <div className="dialog-header">
                  <h5 className="dialog-title" id="exampleModalLabel">New article</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="dialog-body">
                  <div className="field-group">
                    <div className="row">
                      <div className="column column-label">
                        <label htmlFor="title" className="required">Title</label>
                      </div>
                      <div className="column column-input">
                        <div className="row">
                          <input type="text" className="input-field" id="title" required="required" />
                        </div>
                        {/* <label th: if="${#fields.hasErrors('title')}" th:errors="*{title}"></label> */}
                      </div>
                    </div>
                  </div>
                  <div className="field-group">
                    <div className="row">
                      <div className="column column-label">
                        <label htmlFor="url" className="required">Url</label>
                      </div>
                      <div className="column column-input">
                        <div className="row">
                          <input type="text" className="input-field" id="url" required="required" placeholder="Url use to display article on browser, Ex: java-12-release-note" />
                        </div>
                        {/* <label th: if="${#fields.hasErrors('title')}" th:errors="*{url}"></label> */}
                      </div>
                    </div>
                  </div>
                  <div className="field-group">
                    <div className="row">
                      <div className="column column-label">
                        <label htmlFor="description" className="required">Description</label>
                      </div>
                      <div className="column column-input">
                        <div className="row">
                          <input type="text" className="input-field" id="description" required="required" />
                        </div>
                        {/* <label th: if="${#fields.hasErrors('description')}" th:errors="*{description}"></label> */}
                      </div>
                    </div>
                  </div>
                  <div className="field-group">
                    <div className="row">
                      <div className="column column-label">
                        <label htmlFor="articleContent" className="required">Content</label>
                      </div>
                      <div className="column column-input">
                        <div className="row">
                          <textarea className="input-field-area" id="articleContent" required="required" />
                        </div>
                        {/* <label th: if="${#fields.hasErrors('content')}" th:errors="*{content}"></label> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dialog-footer">
                  <button type="button" className="button button-cancel margin-right-10">Cancel</button>
                  <button type="submit" className="button button-save">Save changes</button>
                </div>
              </form >
            </div >
          </div >
        </div >
      </div >
    );
  }
}

export default Article;
