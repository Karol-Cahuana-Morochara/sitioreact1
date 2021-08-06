import React from 'react'
const Aside = () => {
    return (
        <div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button><br></br><br></br>
                    <br></br>
				<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button><br></br><br></br>
                    <br></br>
				<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>

				<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">New message</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<form>
						<div className="mb-3" >
							<label for="recipient-name" className="col-form-label">Recipient:</label>
							<input type="text" className="form-control" id="recipient-name" />
						</div>
						<div className="mb-3">
							<label for="message-text" className="col-form-label">Message:</label>
							<textarea className="form-control" id="message-text"></textarea>
						</div>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						<button type="button" className="btn btn-primary">Send message</button>
					</div>
					</div>

                    
				</div>
				</div>
        </div>
    )
}

export default Aside